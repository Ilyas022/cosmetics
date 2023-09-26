import React from 'react'
import Form from '../components/Form'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className="py-5 px-5 flex items-center justify-center flex-col font-inter">
      <div className="max-w-maxWidth">
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold mb-2">
          Онлайн-подбор средств для лица
        </h1>
        <h2 className="text-base sm:text-lg lg:text-xl mb-8">
          Пройдите короткий тест и получите список наиболее подходящих для вас косметических
          продуктов
        </h2>
        <Form />
      </div>
    </div>
  )
}

export default HomePage
