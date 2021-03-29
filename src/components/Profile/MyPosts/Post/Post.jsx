import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.post}>
      <div className={classes.item}>
        <img src='https://images.unsplash.com/photo-1558624232-75ee22af7e67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80' />
      </div>
      <div className={classes.postInfo}>
        <div>{props.message}</div>
        <div className={classes.like}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB70lEQVRoQ+2Z603DMBSFTyfAbIA36AaUCRATABMAEwATABMAEyAmoGzABmkn4HYDdCUXtY7jt+OkiqX8SOPH+e7DvlZnGHmbjVw/JoDaHpw8MCoPNEIIAOcAFgBO1MMMK/UsAXxKIjKBpY43zekVQmrhGwC3ABjC1lj8M4CXLUjqeNtiToBGiDmALw/h+jrslQv148eOt3yjjg1xJol+ogEaIa4APEWI9xXp6scQd5LoratjpwcSLO8SFfrd6gkjgIrZpqLldUiGkKbNoQvgAcB9qKkK93+URKxrr7UABmj9rWCjF0wAnLivha0ZO/21ntAmAM74y9gVCo97l0Rs4P9mAuDT9LSwkNjpvyURVwFWgN8B7T6t3UgSHbsAOFmOYk1UeNxGEu2VMgcZQqNP4tFvoxxjXEkOLQ82XNHq5cThlRK8i6hyYkheWAOYexdzCoIvMnyo1Q4lDp1F18XGeiNTF5radVGr/rEeZPpBVBnCKp61Ou/EKpxqbK1O8d4AFSC8xAcB9AjhLT4YoAeIIPFRAAUhgsVHAxSAiBKfBJARIlp8MkAGiCTxWQASIJLFZwOIgMgiPitAAEQ28dkBPCCyii8CYIHILr4YgAGiiPiiADsQsP1BoZfvoe9e5XTopH32nwD6tLZprckDtT3wB/Gf1jHmJjRdAAAAAElFTkSuQmCC" />
          like: {props.likesCount}
        </div>
      </div>
    </div>
  )
}
export default Post;