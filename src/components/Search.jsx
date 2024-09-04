import React from 'react'

const Search = () => {
  return (
    <>
    <div className=" bg-[#F2F7FF] flex w-full justify-center mt-[35px] space-x-2 h-[100px] max-[430px]:flex-col max-[430px]:items-center max-[430px]:gap-3 max-[430px]:pb-4">
    <input
      type="text"
      placeholder="Find Your Doctor ..."
      className="max-[430px]:w-[80%]  h-[55px] w-[853px] rounded-3xl border-solid border-3 drop-shadow-2xl border-2 shadow-xl border-zinc-500 outline-none pl-3"
    />
    <input
      type="text"
      placeholder="Location "
      className="h-[55px] min-w-[150px] rounded-3xl border-solid border-3 drop-shadow-2xl border-2 shadow-xl border-zinc-500 outline-none pl-3"
    />
  </div>
  </>
  )
}

export default Search