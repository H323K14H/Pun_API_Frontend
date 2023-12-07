import Fan from "./Fan"

const FanList = ({fans}) => {

    const fanComponents = fans.map(fan => {
        return <Fan fan={fan} key={fan.id}/>
    })

    return(
        <section>
            <h2>All fans</h2>
            {fanComponents}
        </section>
    )

}

export default FanList;