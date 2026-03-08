import { Typography, List, ListItem, ListItemText } from "@mui/material";
import {useEffect, useState } from "react"

function App() {

  const [activities, setActivities] = useState<Activity []>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/activities')
    .then(response => response.json())
    .then(date => setActivities(date))

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
