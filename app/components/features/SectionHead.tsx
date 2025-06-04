const SectionHead = ({title}:{title:string}) => {
  return (
    <div className="flex items-center justify-center mb-8">

    <h2 className="text-4xl font-bold mt-20 max-md:text-3xl max-sm:text-2xl
    bg-gradient-heading md:w-fit py-2 px-6 rounded-md shadow-inner shadow-main-purple text-light w-fit
    ">
      {title}
    </h2>
    </div>
  )
}

export default SectionHead
