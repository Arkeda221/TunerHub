const Cars = (props) => {
  return (
   <div className="infowrap">
                <img src={props.image} alt={props.name} />

                <h3>{props.make}</h3>
                <h3>{props.model}</h3>
                <h3>{props.owner}</h3>
</div>
  )
}

export default Cars