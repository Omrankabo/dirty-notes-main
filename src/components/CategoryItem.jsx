
import toast from "react-hot-toast"

const CategoryItem = ({children,handleFilter,category})=>{
    
    return (
    <div 
    onClick={()=>{
        handleFilter(category)
        category === 'culculus'?
        toast.success('ما لقيت الا جلاد المهندسين',{icon:'😑'}):
        toast.success('ياخطير انت',{icon:'😆'})
    }}
    className={`px-3 py-1 bg-accentLighter capitalize cursor-pointer rounded-xl text-text-100  w-fit`}>
    {children}
    </div>)
}

export default CategoryItem