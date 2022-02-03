import './Card.css'

type Location = {
    name: string;
}
export type TCardData = {
    id: number
    image: string;
    name: string;
    location: Location
}
export default function Card({data}: { data: TCardData }): JSX.Element {
    return (
        <div className="card">
            <div style={{backgroundImage: `url(${data.image})`}} className="cardPicture"/>
            <div className="cardInfo">
                <div style={{fontSize: '16px', lineHeight: '19px', marginTop: '16px'}}>#id: {data.id}</div>
                <div style={{marginTop: '71px'}}>Name: {data.name}</div>
                <div style={{marginTop: '11px'}}>Location: {data.location.name}</div>
            </div>
        </div>)
}