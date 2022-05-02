// check grade

export default async function ({ store, redirect }) {
    if (store.state.authUser.grade == 'administrator') {
        await redirect('/')
    }
}