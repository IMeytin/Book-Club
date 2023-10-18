import loaderStyle from './Loader.module.css'

function Loader() {
    return ( 
    <div className={loaderStyle.containerLoader}>
        <div className={loaderStyle.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
     );
}

export default Loader;