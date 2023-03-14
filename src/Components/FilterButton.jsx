function FilterButton({ isChecked, setFilter, fname, checked }) {

    return (
        <div className='flex flex-col'>
            <input
                type="radio"
                id="all"
                name="accounts"
                className="peer hidden"
                value="all"
                onChange={checked}
                isChecked={isChecked}
                onClick={() => setFilter(fname)}
            />
           <label
                htmlFor="coding"
                className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                    {fname}
            </label>
        </div>
    )
}

export default FilterButton;
