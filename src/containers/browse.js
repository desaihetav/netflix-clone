import React, { useState, useEffect, useContext } from "react";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { FirebaseContext } from "../context/firebase";
import { Card, Header, Loading, Player } from "../components";
import { SelectProfileContainer } from "./profile";
import { FooterContainer } from "./footer";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {/* {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />} */}

      <Header src="joker2" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out of Netflix
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Joker</Header.FeatureCallOut>
          <Header.Text>
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society. He then embarks on a downward
            spiral of revolution and bloody crime. This path brings him
            face-to-face with his alter-ego: the Joker.
          </Header.Text>
          <Header.PlayButton>▶ Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <>
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                </>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
