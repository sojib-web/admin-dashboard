
import './DashboardBox.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from "react-icons/io";
import { useState } from 'react';
const DashboardBox = (props) => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Button className="dashboardBox" style={{ backgroundImage: `linear-gradient(to right, ${props.color ? props.color[0] : '#000'}, ${props.color ? props.color[1] : '#ccc'})` }}>
            {
                props.grow === true ? <span className='chart'><TrendingDownIcon /></span> : <span className='chart'><TrendingUpIcon /></span>
            }
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

            <div className='d-flex align-items-center w-100 bottomEle'>
                <h6 className='text-white mb-0 mt-0'>Last Mounth</h6>
                <div className='ml-auto'>
                    <Button className='ml-auto toggleIcon' onClick={handleClick}><HiDotsVertical /></Button>

                    <Menu
                        className='dropDownMenus'
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {

                                width: '20ch',
                            },
                        }}
                    >

                        <MenuItem onClick={handleClose}>
                            <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                                <span className='align-items-center'>Last Day</span></div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                                <span className='align-items-center'>Last Day</span></div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                                <span className='align-items-center'>Last Day</span></div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div className='IconText'>                            <IoIosTimer className='mr-3 Timer' />
                                <span className='align-items-center'>Last Day</span></div>

                        </MenuItem>

                    </Menu>
                </div>
            </div>
        </Button>


    )
}
export default DashboardBox