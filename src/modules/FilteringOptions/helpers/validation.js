export const validation = (data) => {
    console.log(!data.channel)
    console.log(!data.city)
    console.log(!data.name)
    console.log(!data.phone)
    console.log(!data.staff)
    console.log(!data.date)
    return (!data.channel || !data.city || !data.name || !data.phone || !data.staff || !data.date);
}