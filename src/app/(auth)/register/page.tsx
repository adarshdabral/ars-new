"use client";
import { useState } from "react";
import StepPanel from "./components/StepPanel";
import SignupForm from "./components/SignupForm";
import SetupProfileForm from "./components/SetupProfileForm";
// Removed UploadArtworkForm import

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center gap-10 w-full px-2 lg:flex-row lg:justify-center lg:items-center lg:max-w-7xl lg:mx-auto">
      {<StepPanel step={step} />}
      {step === 1 && <SignupForm setStep={setStep} />}
      {step === 2 && <SetupProfileForm onNext={() => setStep(2)} />}
    </div>
  );
}
