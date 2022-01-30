import './Card.css'
export default function Card({data}: any){
    if(!data){
        return (<div>No Data for this character</div>)
    }
    return (
        <div className="card">
        <div style={{backgroundImage: `url(${data.image})`}} className="cardPicture" />
        <div className="cardInfo">
            <div style={{fontSize: '16px', lineHeight: '19px', marginTop: '16px'}}>#id: {data.id}</div>
            <div style={{marginTop: '71px'}}>Name: {data.name}</div>
            <div style={{marginTop: '11px'}}>Location: {data.location.name}</div>
        </div>
    </div>)
}