import cn from 'classnames'
import { useForm } from '../useForm'
import Button from './Button'
import { useMemo, useState } from 'react'
import Step from './Step'
import { mockValues } from '../mockValues'
import { useNavigate } from 'react-router-dom'

export interface IData {
  age: string
  skinType: string
  inflammation: string
}

const initialData: IData = {
  age: '',
  skinType: '',
  inflammation: '',
}

const Form: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  const updateData = (field: Partial<IData>) => {
    setData((prev) => ({ ...prev, ...field }))
  }

  const [data, setData] = useState<IData>(initialData)
  const steps = useMemo(() => {
    return mockValues.map((step) => {
      return <Step data={data} className="" key={step.id} step={step} updateData={updateData} />
    })
  }, [data])

  const { step, stepsNumber, nextStep, prevStep, currentStep, isFirst, isLast } = useForm(steps)
  const isButtonDisabled = data[Object.keys(data)[step] as keyof IData]

  return (
    <div className="flex flex-col h-[350px] lg:h-[432px] bg-secondary py-4 px-4 lg:py-[30px] lg:px-[35px]  rounded-[10px]">
      <div className="mb-6">
        <div className="flex gap-4 mb-2">
          <span
            className={cn('h-5 w-5 bg-primary rounded-full', step === 0 && 'bg-primaryActive')}
          />
          <span
            className={cn('h-5 w-5 bg-primary rounded-full', step === 1 && 'bg-primaryActive')}
          />
          <span
            className={cn('h-5 w-5 bg-primary rounded-full', step === 2 && 'bg-primaryActive')}
          />
        </div>
        <div>
          Вопрос {step + 1} из {stepsNumber}
        </div>
      </div>
      {currentStep}
      <div className="mt-auto flex gap-4">
        {!isFirst ? <Button color="white" text="Назад" onClick={prevStep} /> : null}
        <Button
          color="primary"
          text={isLast ? 'Узнать результат' : 'Дальше'}
          onClick={isLast ? () => navigate('/result') : nextStep}
          disabled={!isButtonDisabled && true}
        />
      </div>
    </div>
  )
}

export default Form
