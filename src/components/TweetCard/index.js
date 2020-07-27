import React from 'react'
import api from '../../services/api';
import { Card } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';

/**
 * Componente do card do tweet
 * @param {text, user, id, options} props propriedades do componente
 */

function TweetCard({ text, user, id, options = {} }) {
    /**
     * request para aprovar o tweet
     */
    const approveTweet = () => {
        api.get(`/tweet/${id}/approve`);
    }

    /**
     * request para rejeitar o tweet
     */
    const rejectTweet = () => {
        api.get(`/tweet/${id}/reject`);
    }

    /**
     * request para apagar o tweet
     */
    const deleteTweet = () => {
        api.delete(`/tweet/${id}`);
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
                            <FontAwesomeIcon color="#707f8c" icon={faThumbsUp} />
                        </button>
                    }
                    {!!options.reject &&
                        <button className="btn-action" onClick={() => rejectTweet()}>
                            <FontAwesomeIcon color="#707f8c" icon={faThumbsDown} />
                        </button>
                    }
                    {!!options.delete &&
                        <button className="btn-action" onClick={() => deleteTweet()}>
                            <FontAwesomeIcon color="#707f8c" icon={faTrash} />
                        </button>
                    }
                </div>
            </div>

            {text.split('\n').map((item, key) => {
                return <span key={key}>{item}<br /></span>
            })}
        </Card>
    )
}

export default TweetCard;