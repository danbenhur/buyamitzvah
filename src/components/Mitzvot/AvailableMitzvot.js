import classes from "./AvailableMitzvot.module.css";
import Card from "../UI/Card";
import MitzvahItem from "./MitzvahItem/MitvahItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMitzvot = () => {
  const mitzvotList = DUMMY_MEALS.map((mitzvah) => (
    <MitzvahItem
      id={mitzvah.id}
      key={mitzvah.id}
      name={mitzvah.name}
      description={mitzvah.description}
      price={mitzvah.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mitzvotList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMitzvot;
