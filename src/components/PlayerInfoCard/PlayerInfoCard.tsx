import Image from 'next/image'
import { PlayerInfoCardProps } from './types'
import { mapperFieldsName } from '@/utils/mapperFieldsName'

const PlayerInfoCard = ({
  id,
  name,
  position,
  selection,
  club,
  goals,
  assists,
  age,
  photo,
}: PlayerInfoCardProps) => {
  const player = {
    id,
    name,
    position,
    selection,
    club,
    goals,
    assists,
    age,
    photo,
  }

  const mapperFields = mapperFieldsName(player)

  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center justify-center">
        <div className="bg-white mr-8">
          <Image
            src={player.photo}
            alt={player.name}
            width={80}
            height={10}
            priority={true}
          />
        </div>

        {mapperFields.map((field) => (
          <div key={field.label} className="mr-8">
            <p className="relative text-center after:content after:block after:w-full after:border-t-2 after:border-white after:mb-2 after:mt-1 after:h-2">
              {field.label}
            </p>

            <div
              className="relative w-28 bg-gradient-to-br to-gray-600
         to-50% from-gray-500 from-50% flex flex-1 items-center justify-center"
            >
              <p className="text-white font-bold text-center p-3">
                {field.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerInfoCard
