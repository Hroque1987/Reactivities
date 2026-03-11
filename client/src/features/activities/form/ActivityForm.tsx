import { Paper, Typography, Button, Box, TextField } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";



export default function ActivityForm() {
    const { id } = useParams();
    const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);
    const navigate = useNavigate();



    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)

        const data: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (activity) data.id = activity.id;

        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity)
            navigate(`/activities/${activity.id}`)
        } else {
            createActivity.mutate(data as unknown as Activity, {
                onSuccess: (id) => {
                    navigate(`/activities/${id}`)
                }
            })
        }

    };


    if (isLoadingActivity) {
        return
        <Typography>
            Loading...
        </Typography>
    }

    return (
        <Paper sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                {activity ? 'Edit Activity' : 'Create ACtivity'}
            </Typography>
            <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={3} >
                <TextField name='Title' label='Title' defaultValue={activity?.title} />
                <TextField name='Description' label='Description' defaultValue={activity?.description} multiline rows={2} />
                <TextField name='Category' label='Category' defaultValue={activity?.category} />
                <TextField name='Date' label='Date' type="date" defaultValue={activity?.date ? new Date(activity.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]} />
                <TextField name='City' label='City' defaultValue={activity?.city} />
                <TextField name='Venue' label='Venue' defaultValue={activity?.venue} />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button onClick={id? () => navigate(`/activities/${id}`): () => navigate('/activities/')} color='inherit'>Cancel</Button>
                    <Button type="submit" variant="contained" loading={updateActivity.isPending || createActivity.isPending} color='success'>Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}
