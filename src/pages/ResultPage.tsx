import React, { useEffect, useState } from 'react'
import CardItem from '../components/CardItem'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const ResultPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  const [results, setResults] = useState<
    { id: number; title: string; image: string; price: number; oldPrice: null | number }[]
  >([])
  useEffect(() => {
    const getResult = async () => {
      try {
        const res = await fetch('../products.json')
        const data = await res.json()
        if (data.length) {
          setResults(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getResult()
  }, [])

  return (
    <div className="max-w-[1440px] p-7 sm:p-9 md:p-[50px] mx-auto">
      <Button
        className="sm:w-max mb-2 w-full"
        color="primary"
        text="Пройти тест заново"
        onClick={() => navigate('/')}
      />
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">Результат</h1>
      <h2 className="text-base sm:text-lg lg:text-xl mb-5 sm:mb-10 lg:mb-16">
        Мы подобрали для вас наиболее подходящие средства
      </h2>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-5 md:gap-7 gap-5 lg:gap-[35px]">
        {results?.length
          ? results.map((result) => {
              return <CardItem className="cursor-pointer" key={result.id} card={result} />
            })
          : 'no results'}
      </div>
    </div>
  )
}

export default ResultPage
