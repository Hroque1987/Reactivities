import { Typography, List, ListItem, ListItemText } from "@mui/material";
import {useEffect, useState } from "react"
import axios from "axios";

function App() {

  const [activities, setActivities] = useState<Activity []>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))

    return () => {}
  }, []);

  return (
    <>
      <Typography variant='h3' style={{color: 'red'}}>Reactivities</Typography>
      <List>
        {activities.map((activitity) => (
          <ListItem key={activitity.id}>
            <ListItemText>
              {activitity.title}
            </ListItemText>
          </ListItem>
        ))}

      </List>
    </>

  )
}

export default App
