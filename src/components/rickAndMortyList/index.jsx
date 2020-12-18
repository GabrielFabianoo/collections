import RickAndMortyCharacter from "../rickAndMortyCharacter";

const RickAndMortyList = ({ list }) => {
  return (
    <>
      {list.map(
        (
          {
            id,
            name,
            image,
            status,
            species,
            type,
            gender,
            origin,
            location,
            created,
          },
          idx
        ) => (
          <RickAndMortyCharacter
            key={idx}
            id={id}
            name={name}
            image={image}
            status={status}
            species={species}
            type={type}
            gender={gender}
            origin={origin.name}
            location={location.name}
            created={created}
          />
        )
      )}
    </>
  );
};

export default RickAndMortyList;
