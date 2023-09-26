import cn from 'classnames'

export interface ICardItem {
  card: { id: number; title: string; image: string; price: number; oldPrice: null | number }
  className: string
}

const CardItem: React.FC<ICardItem> = ({
  card: { image, oldPrice, price, title },
  className,
}: ICardItem): JSX.Element => {
  return (
    <div className={cn('group flex flex-col', className && className)}>
      <img
        className="w-full h-60 mb-5 object-contain rounded-lg border border-solid border-[#E9E9E9] duration-500 group-hover:border-red-400"
        src={image}
        alt=""
      />
      <div className="mb-2 line-clamp-2 text-sm md:text-base xl:text-lg">{title}</div>
      <div className="flex gap-3 items-end mt-auto">
        {oldPrice ? (
          <div className="line-through text-oldPrice text-base lg:text-xl">{oldPrice}</div>
        ) : null}
        <div className="md:text-lg lg:text-2xl xl:text-[27px] font-semibold md:leading-6 xl:leading-9">
          {price} руб.
        </div>
      </div>
    </div>
  )
}

export default CardItem
