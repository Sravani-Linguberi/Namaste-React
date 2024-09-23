const RestaurantCategory = ({data}) => {
    console.log(data, " RestaurantCategory")
    return <div>
        {/* heading */}
        <div className="w-6/12 mx-auto p-3 bg-gray-50 shadow-md my-5 flex justify-between">
            <span>{data.title}</span>
            <span> 🔽 </span>
        </div>
        {/* discription */}

    </div>
}

export default RestaurantCategory;