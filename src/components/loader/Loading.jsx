import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full gap-8 flex-col my-8'>
      <div className={`${styles.spinner} `}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className=" text-sm mb-4 font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-base to-accent">
        Getting the magic ready..
      </span>
    </div>
)}

export default Loading;
