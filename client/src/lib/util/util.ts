import { format, type DateArg } from "date-fns";

export function formatDate(date: DateArg<Date>){
    return format(new Date(date), 'dd MMM yyyy h:mm')
}