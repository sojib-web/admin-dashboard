
import './DashboardBox.css'
const DashboardBox = (props) => {
    return (
        <div className="dashboardBox" style={{ backgroundImage: `linear-gradient(to right, ${props.color ? props.color[0] : '#000'}, ${props.color ? props.color[1] : '#ccc'})` }}>
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white">Total User</h4>
                    <span className="text-white">267</span>

                </div>
                <div className="ml-auto">
                    {props.icon ?
                        <span className="icon" >
                            {props.icon ? props.icon : ''}
                        </span> :
                        ''}


                </div>
            </div>
        </div>


    )
}
export default DashboardBox