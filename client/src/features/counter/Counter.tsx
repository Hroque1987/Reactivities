import { Box, Button, ButtonGroup, List, ListItem, Paper, Typography } from "@mui/material"
import { useStore } from "../../lib/hooks/useStore"
import { observer } from "mobx-react-lite"

const Counter = observer(function Counter() {

    const { counterStore } = useStore()
    return (
        <Box display='flex' justifyContent='space-between'>
            <Box sx={{ width: '60%' }}>
                <Typography variant="h4" gutterBottom >{counterStore.title}</Typography>
                <Typography>The Count is: {counterStore.count}</Typography>

                <ButtonGroup sx={{ mx: 3 }}>
                    <Button onClick={() => { counterStore.decrement() }} variant="contained" color="error">Decrement</Button>
                    <Button onClick={() => { counterStore.increment() }} variant="contained" color="success">Increment</Button>
                    <Button onClick={() => { counterStore.increment(5) }} variant="contained" color="primary">Increment by 5</Button>
                </ButtonGroup>

            </Box>
            <Paper sx={{ width: '60%', p:3, borderRadius: 3 }}>
                <Typography variant="h5">Counter Events ({counterStore.eventCount})</Typography>
                <List>
                    {counterStore.events.map((event, index) => (
                        <ListItem key={index}>{event}</ListItem>
                    ))}
                </List>

            </Paper>

        </Box>


    )
})

export default Counter;