import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        name: 'Diego Sahid',
        userName: 'diego-deese',
        isFollowing: true
    },
    {
        name: 'Crystal Figueroa',
        userName: 'crysssssst',
        isFollowing: false
    },
    {
        name: 'Juan Pablo',
        userName: 'juanpiboss',
        isFollowing: true
    },
    {
        name: 'Miguel Ángel Durán',
        userName: 'midudev',
        isFollowing: false
    }
]

export function App () {

    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}