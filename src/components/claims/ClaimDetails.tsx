import React, { useEffect, useState } from "react";
import { properText } from "../../utils/StringUtils";
import { approveClaim, listRequest, rejectClaim } from "../../api/api";
import { toast } from "react-toastify";
import { ClaimDetail, claimsMapper } from ".";
import Loading from "../common/Loading";
import StatusChip from "../common/StatusChip";
import Heading from "../common/Heading";
import Tabs from "../common/Tabs";
import Checklist, { ChecklistItem } from "../common/Checklist";

import FinancialInfo from "./FinancialInfo";
import PatientDetails from "./PatientDetails";
import MedicalInfo from "./MedicalInfo";
import { lowerCase } from "lodash";

export interface RejectApproveHandlers {
  handleReject: typeof handleReject;
  handleApprove: typeof handleApprove;
}

const handleReject = async ({ request_id, type }: any) => {
  await rejectClaim({ request_id, type });
  toast("Claim Rejected", { type: "success" });
};

const handleApprove = async ({
  request_id,
  type,
  remarks,
  approved_amount,
}: any, use:any) => {
  await approveClaim({
    request_id,
    type,
    remarks,
    approved_amount,
  });
  toast(`${type} ${use} approved`, { type: "success" });
};

export default function ClaimDetails({
  request_id,
  use,
}: {
  request_id: string;
  use: "preauth" | "claim";
}) {
  const [activeTab, setActiveTab] = React.useState("patient_details");
  const [claim, setClaim] = React.useState<ClaimDetail | null>(null);
  const [medicineApproval, setMedicineApproval] = useState<{
    remarks: string | undefined;
    amount: number;
  }>({
    remarks: "",
    amount: 0,
  });
  console.log("claim type" ,  use);
  /*const [financialApproval, setFinancialApproval] = useState<{ remarks: string | undefined, amount: number }>({
    remarks: "",
    amount: 0,
  });*/

  async function getClaims(): Promise<any> {
    const res: any = await listRequest({ type: use });
    const claim = res[`${use}`].find(
      (claim: any) => claim.request_id === request_id
    );
    setClaim(claimsMapper(claim));
  }

  useEffect(() => {
    if (!claim) return;
    setMedicineApproval({
      amount: parseFloat(
        (claim.medical_info.approved_amount || claim.requested_amount)
          .toString()
          .replace("INR ", "")
      ),
      remarks: claim.medical_info.remarks,
    });
  }, [claim]);

  const [detailsChecklist, setDetailsChecklist] = useState<ChecklistItem[]>([
    {
      id: "1",
      name: "Proof of Identity Attached",
    },
    {
      id: "2",
      name: "Policy Active",
    },
  ]);

  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: "1",
      name: "Treatment in line with diagnosis",
    },
    {
      id: "2",
      name: "Discharge summary available",
    },
    {
      id: "3",
      name: "Discharge summary in line with treatment",
    },
  ]);

  const [financialCheckList, setFinancialCheckList] = useState<ChecklistItem[]>(
    [
      {
        id: "1",
        name: "Amount within wallet range?",
      },
      {
        id: "2",
        name: "Procedures not in exclusion list? ",
      },
      {
        id: "3",
        name: "Procedures as per approved plan?",
      },
      {
        id: "4",
        name: "Waiting period observed? ",
      },
      {
        id: "5",
        name: "Policy In force force for the treatment period?",
      },
      {
        id: "6",
        name: "Needed supporting documents available?",
      },
    ]
  );

  useEffect(() => {
    getClaims();
  }, [request_id]);

  if (!claim)
    return <div className="mt-8">
      <Loading type="skeleton" length={10} rowClassName="gap-6" />
    </div>;

  const tabList = [
    {
      id: "patient_details",
      name: "General Details",
      children: <PatientDetails claim={claim} />,
      checklist: detailsChecklist,
      setChecklist: setDetailsChecklist,
    },
    {
      id: "medical",
      name: "Medical Info",
      children: <MedicalInfo claim={claim} />,
      checklist: checklist,
      setChecklist: setChecklist,
      approval: medicineApproval,
      setApproval: setMedicineApproval,
    },
    {
      id: "financial",
      name: "Financial Info",
      children: <FinancialInfo claim={claim} />,
      checklist: financialCheckList,
      setChecklist: setFinancialCheckList,
      approval: medicineApproval,
      setApproval: setMedicineApproval,
    },
  ];
  const currentTab = tabList.find((tab) => tab.id === activeTab);

  return (
    <div>
      <Heading
        heading={
          <div className="flex flex-row mb-2">
            <div className="flex items-center gap-2 mr-4">
              {properText(use)} Details
            </div>
            <StatusChip status={claim.status as any} size={"md"} />
          </div>
        }
      />
      {claim.sub_type == "OPD" && use == "claim" ? <> 
        <p className="text-sm italic text-gray-500">
            {properText(use)} OTP Verification : <StatusChip status={claim.otp_verification as any} size={"sm"}/> 
      </p>
      <p className="text-sm italic text-gray-500">
      <span className="font-mono">{"Claim can not be approved until OTP verification is complete"}</span></p>
      </>

      : null}
      
      <p className="text-sm italic text-gray-500">
        {properText(use)} ID : <span className="font-mono">{claim.id}</span>
      </p>
      <p className="text-sm italic text-gray-500 mb-6">
        {properText(use)} No. :{" "}
        <span className="font-mono">{claim.request_no}</span>
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="flex-1 w-4/5">
            <Tabs
              tabs={tabList}
              activeTab={activeTab}
              setActiveTab={(next: any) => setActiveTab(next)}
            />
          </div>{" "}
          <div className="flex-1 w-1/5 max-w-md">
            <Checklist
              scores={{
                pass: currentTab?.checklist?.length || 0,
                fail: 1,
                na: 2,
              }}
              enableButtons={use == "claim" && claim.sub_type == "OPD" && lowerCase(claim.otp_verification) != "successful" || claim.account_number == "1234" && use == "claim" && claim.sub_type == "OPD"? false : true}
              items={currentTab?.checklist as any}
              setItems={currentTab?.setChecklist as any}
              approval={currentTab?.approval}
              setApproval={currentTab?.setApproval as any}
              onApprove={async (e: any) => {
                await handleApprove(e, use);
                setTimeout(() => {
                  getClaims()
                }, 1000);
              }}
              nextTab={
                activeTab === "financial"
                  ? undefined
                  : () => {
                      if (activeTab === "patient_details") {
                        setActiveTab("medical");
                      } else if (activeTab === "medical") {
                        setActiveTab("financial");
                      }
                    }
              }
              onReject={async (e: any) => {
                await handleReject(e);
                setTimeout(() => {
                  getClaims()
                }, 1000);
              }}
              claim={claim}
              type={activeTab as any}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
