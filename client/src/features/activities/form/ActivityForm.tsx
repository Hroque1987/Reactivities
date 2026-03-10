import { Paper, Typography, Button, Box, TextField } from "@mui/material";


type Props = {
    activity?: Activity
    closeForm: () => void
    submitForm: (acticity: Activity) => void

}

export default function ActivityForm({ activity, closeForm, submitForm }: Props) {

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        

        const newActivity: Activity = {
            id: activity?.id ?? "",
            title: formData.get("Title") as string,
            description: formData.get("Description") as string,
            category: formData.get("Category") as string,
            date: formData.get("Date") as string,
            city: formData.get("City") as string,
            venue: formData.get("Venue") as string,
            isCancelled: false,
            latitude: 0,
            longitude: 0
        }

        console.log(newActivity)

        submitForm(newActivity)
    };

    return (
        <Paper sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Activity
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3} >
                <TextField name='Title' label='Title' defaultValue={activity?.title} />
                <TextField name='Description' label='Description' defaultValue={activity?.description} multiline rows={2} />
                <TextField name='Category' label='Category' defaultValue={activity?.category} />
                <TextField name='Date' label='Date' type="date" defaultValue={activity?.date} />
                <TextField name='City' label='City' defaultValue={activity?.city} />
                <TextField name='Venue' label='Venue' defaultValue={activity?.venue} />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={closeForm} color='inherit'>Cancel</Button>
                    <Button type="submit" variant="contained" color='success'>Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}
