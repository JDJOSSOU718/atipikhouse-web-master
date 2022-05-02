// Authentication logic

export default async function ({ store, redirect }) {
    if (!store.state.authUser) {
        await redirect('/login')
    }
}