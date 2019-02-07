import React     from 'react';
import './GalleryImage.css';
import { Image } from 'semantic-ui-react';

import { withStyles }   from '@material-ui/core/styles';
import Button           from '@material-ui/core/Button';
import Dialog           from '@material-ui/core/Dialog';
import MuiDialogTitle   from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton       from '@material-ui/core/IconButton';
import CloseIcon        from '@material-ui/icons/Close';
import Typography       from '@material-ui/core/Typography';

import loadImage from './load-image-hover.svg'
import Dropzone from 'react-dropzone';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);


class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalContent: {
        type: null, // load / view
        url: null,

      },
    };
  }

  viewImage = () => {
    this.setState({
      open: true,
      modalContent: {
        type: 'view',
        url: this.props.url,
      },
    });
  };

  loadImage = () => {
    this.setState({
      open: true,
      modalContent: {
        type: 'load',
      },
    });
  };

  handleClose = e => {
    e.stopPropagation();
    this.setState({ open: false });
  };

  handleDeleteImage = () => {
    console.log('delete image');
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    // Do something with files
  };


  render() {
    return (
      <div className={this.props.className}
           onClick={this.props.alt === 'load image' ?
             () => this.loadImage() :
             () => this.viewImage()}>
        <Image src={this.props.url} alt={this.props.alt}/>
        <div className={`${this.props.className}-hover`}>
          {this.props.alt === 'load image' ?
            <Image src={'../images/gallery/load-image-hover.svg'} alt={this.props.alt}/> :
            <Image src={'../images/gallery/view-image.svg'} alt={this.props.alt}/>
          }
        </div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {this.props.alt === 'load image' ?
              'Загрузить новое изображение в галерею' :
              `Реактировать изображение ${this.props.url.split('/')[this.props.url.split('/').length - 1]}`}
          </DialogTitle>
          <DialogContent>
            <div className={'modal-content'}>
              {!(this.props.alt === 'load image') ?
                <Image src={this.state.modalContent.url}
                       className={`modal-view-image-url`}/> :
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                      <div
                        {...getRootProps()}
                        className={"dropzone"}
                      >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <p className={"image-box-text"}>
                            Перетягніть зображення сюди
                          </p>
                        ) : (
                          <div className={"image-box"}>
                            <p>Додайте зображення</p>
                            <img src={loadImage} className={"upload-image"} />
                            <p className={"image-box-text"}>
                              Перетягніть зображення сюди
                            </p>
                            <p
                              onClick={() => getInputProps()}
                              className={"choose-file"}
                            >
                              або виберіть з файлів
                            </p>
                            <p className={"image-box-text"}>SVG format</p>
                          </div>
                        )}
                      </div>
                    );
                  }}
                </Dropzone>
              }
            </div>
          </DialogContent>
          <DialogActions>
            {!(this.props.alt === 'load image') ?
              <Button onClick={this.handleDeleteImage} color="secondary">
                Delete image
              </Button> :
              null
            }
            <Button onClick={this.handleClose} color="primary">
              Close modal
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default GalleryImage;
