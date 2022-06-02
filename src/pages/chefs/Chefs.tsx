import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChefs } from "../../store/chef/chef.action";
import { RootStore } from "../../store/store";
import { Card, CardContainer, ChefsContainer } from "./Chefs.styled";

const Chefs = () => {
  const chefs = useSelector((state: RootStore) => state.chef.chefs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllChefs());
  }, []);
  const renderContent = () => {
    if (!chefs) {
      return <div>Loading...</div>;
    } else
      return (
        <>
          <h6>Chefs</h6>
          <CardContainer>
            {chefs.map((chef) => (
              <Card key={chef.name}>
                <figure>
                  <img src={require(`../../${chef.image}`)} alt={chef.name} />
                  <figcaption>{chef.name}</figcaption>
                </figure>
              </Card>
            ))}
          </CardContainer>
        </>
      );
  };

  return <ChefsContainer>{renderContent()}</ChefsContainer>;
};

export default Chefs;
