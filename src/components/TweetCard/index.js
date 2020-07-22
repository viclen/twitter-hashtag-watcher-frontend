import React from 'react'
import api from '../../services/api';
import { Card } from './style';

function TweetCard({ text, user, id, options = {} }) {
    const approveTweet = () => {
        api.get(`/tweet/${id}/approve`).then(r => {

        });
    }

    const rejectTweet = () => {
        api.get(`/tweet/${id}/reject`).then(r => {

        });
    }

    const deleteTweet = () => {
        api.delete(`/tweet/${id}`).then(r => {

        });
    }

    return (
        <Card>
            <div className="header">
                <div className="picture">
                    <img src={user.profile_image_url_https} alt="Foto de Perfil" />
                </div>
                <div className="title">
                    <div className="name">
                        {user.name}
                    </div>
                    <div className="screen-name">
                        @{user.screen_name}
                    </div>
                </div>
                <div>
                    {!!options.approve &&
                        <button className="btn-action" onClick={() => approveTweet()}>
                            <span role="img" aria-label="aprovar">
                                👍
                            </span>
                        </button>
                    }
                    {!!options.reject &&
                        <button className="btn-action" onClick={() => rejectTweet()}>
                            <span role="img" aria-label="rejeitar">
                                👎
                            </span>
                        </button>
                    }
                    {!!options.delete &&
                        <button className="btn-action" onClick={() => deleteTweet()}>
                            <span role="img" aria-label="apagar">
                                &#128465;
                            </span>
                        </button>
                    }
                </div>
            </div>

            {text}
        </Card>
    )
}

export default TweetCard;