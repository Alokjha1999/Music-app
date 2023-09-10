import './index.css';
export function Heading(props){
    return(
        <div className='heading'>
            <div className='small'> {props.small}</div>
            <div className="main">{props.main}</div>
        </div>
    )
}