import { Box } from "@mui/material";
import Activitycard from "./Activitycard";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void

}


export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map(activity => (
                <Activitycard selectActivity= {selectActivity} key={activity.id} activity={activity} deleteActivity={deleteActivity} />
            ))}

        </Box>
    )
}
