import React from 'react'
import { IData } from './Form'

interface IStep {
  step: {
    title: string
    values: string[]
    type: string
  }
  data: IData
  updateData: (filed: { [key: string]: string }) => void
  className?: string
}

const Step: React.FC<IStep> = ({ className, step, updateData, data }: IStep): JSX.Element => {
  return (
    <div className={className && className}>
      <h3 className="text-base lg:text-xl font-bold mb-2 lg:mb-6">{step.title}</h3>
      <fieldset id="skinType" className="flex flex-col gap-2">
        {step.values.map((type, index) => {
          return (
            <label key={index} className="flex items-start text-sm lg:text-base">
              <input
                defaultChecked={data[step.type as keyof IData] === type}
                name="skinType"
                onClick={() => updateData({ [step.type]: type })}
                className="rounded-full mr-[10px] mt-[6px]"
                type="radio"
              />
              {type}
            </label>
          )
        })}
      </fieldset>
    </div>
  )
}

export default Step
