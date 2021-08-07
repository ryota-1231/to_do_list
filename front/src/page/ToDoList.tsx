import React, { useState, forwardRef } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { CssBaseline, Container } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: 20,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBottom: 10,
    },
    flex: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    taskLabel: {
      fontSize: 18,
      color: '#3f51b5',
      fontWeight: 'bold',
      lineHeight: '40px',
    },
    titleText: {
      width: '80%',
      // backgroundColor: '#FCEDBD'
    },
    descriptionText: {
      width: '80%',
      // backgroundColor: '#FCEDBD',
    },
    icon: {
      width: 20,
      height: 20,
    },
    appBar: {
      position: 'relative',
    },
    appBarTitle: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    paperBtn: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 52,
    },
    btn: {
      height: '100%',
      width: '100%',
    },
  }),
);

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ToDoList() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              To Do List
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>やること</Paper>
                <Paper className={classes.paperBtn}>
                  <Button onClick={handleClickOpen} className={classes.btn}>
                    <AddCircleOutlineIcon className={classes.icon} />
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>処理中</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>処理済み</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>完了</Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.appBarTitle}>
                タスクを追加する
              </Typography>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item md={6} sm={12} xs={12}>
                <Paper className={classes.paper}>
                  <Box className={classes.flex} mb={2}>
                    <div className={classes.taskLabel}>タイトル</div>
                    <TextField id="task-title" variant="outlined" size='small' className={classes.titleText} />
                  </Box>
                  <Box className={classes.flex}>
                    <div className={classes.taskLabel}>説明</div>
                    <TextField id="task-title" variant="outlined" multiline rows={10} className={classes.descriptionText} />
                  </Box>
                  ファイル添付
                </Paper>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Paper className={classes.paper}>
                  担当者
                  優先度
                  期限
                  <Button autoFocus color="inherit" onClick={handleClose}>
                    保存する
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Dialog>
      </div>
    </div>
  );
}
