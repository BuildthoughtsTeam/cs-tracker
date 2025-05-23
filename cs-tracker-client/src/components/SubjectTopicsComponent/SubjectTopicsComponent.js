import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from "react-router-dom"
import './SubjectTopicsComponent.css'


const useStyles = makeStyles({
  container: {},
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },
})

const SubjectTopicsComponent = ({
  id,
  name,
  description,
  questionsCount,
  imageUrl,
}) => {
  const classes = useStyles()
  const history = useHistory()


  const renderQuestionsList= () => {
    history.push('/questions')
  }

  return (
    <div classeName="container">
      <Card className={classes.root} onClick={renderQuestionsList}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Total questions: {questionsCount}
          </Button>
          
        </CardActions>
      </Card>
    </div>
  )
}
export default SubjectTopicsComponent
