import { Typography, Grid } from "@mui/material"
import { useNavigate, useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDeatailsInfo from "./ActivityDeatailsInfo";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";


export default function ActivityDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) {
        return
        <Typography>
            Loading...
        </Typography>
    }
    if (!activity) {
        return
        <Typography>
            Activity not found
        </Typography>
    }

    return (
        <Grid container spacing={3}>
            <Grid size={8}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDeatailsInfo activity={activity} />
                <ActivityDetailsChat />

            </Grid>
            <Grid size={4}>
                <ActivityDetailsSidebar />

            </Grid>

        </Grid>
    )
}
