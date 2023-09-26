import { ReactElement, useState } from 'react'

export const useForm = (steps: ReactElement[]) => {
  const [step, setStep] = useState<number>(0)

  const nextStep = () => {
    setStep((prev) => {
      if (prev >= steps.length - 1) {
        return prev
      }
      return prev + 1
    })
  }

  const prevStep = () => {
    setStep((prev) => {
      if (prev <= 0) {
        return prev
      }
      return prev - 1
    })
  }

  const gotToStep = (index: number) => {
    setStep(index)
  }

  return {
    step,
    currentStep: steps[step],
    stepsNumber: steps.length,
    gotToStep,
    nextStep,
    prevStep,
    isFirst: step === 0,
    isLast: step === steps.length - 1,
  }
}
