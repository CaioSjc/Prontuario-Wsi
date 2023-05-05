import Loading from '../../assets/IconLoader/spinner.svg'
import L from '../../Styles/StyleLoader'

function Loader() {
return(
    <L.ContainerLoader>
        <L.LoaderStyle src={Loading} />
    </L.ContainerLoader>
)
}

export default Loader