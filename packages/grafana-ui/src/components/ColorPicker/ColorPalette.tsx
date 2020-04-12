import React from 'react';
import { Icon } from '../Icon/Icon';
import { sortedColors } from '../../utils';

export interface Props {
  color: string;
  onColorSelect: (c: string) => void;
}

export class ColorPalette extends React.Component<Props, any> {
  paletteColors: string[];

  constructor(props: Props) {
    super(props);
    this.paletteColors = sortedColors;
    this.onColorSelect = this.onColorSelect.bind(this);
  }

  onColorSelect(color: string) {
    return () => {
      this.props.onColorSelect(color);
    };
  }

  render() {
    const colorPaletteItems = this.paletteColors.map(paletteColor => {
      const type = paletteColor.toLowerCase() === this.props.color.toLowerCase() ? 'default' : 'mono';
      return (
        <Icon
          key={paletteColor}
          name="circle"
          type={type}
          style={{ color: paletteColor }}
          onClick={this.onColorSelect(paletteColor)}
        >
          &nbsp;
        </Icon>
      );
    });
    return (
      <div className="graph-legend-popover">
        <p className="m-b-0">{colorPaletteItems}</p>
      </div>
    );
  }
}
