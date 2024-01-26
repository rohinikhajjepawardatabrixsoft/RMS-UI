/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import { Placement } from 'react-bootstrap/esm/types';
// import './TooltipComponent.scss';

interface TooltipInterface {
  tooltipClass?: string;
  tooltipContent: ReactElement | string | null;
  children: ReactElement | string;
  placement?: Placement;
  showTooltip?: boolean;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
  alignContent?: 'start' | 'end' | 'justify' | 'center';
  container?: HTMLElement | null;
}

const TooltipComponent: React.FC<TooltipInterface> = (props: TooltipInterface): ReactElement => {
  const {
    tooltipClass,
    tooltipContent,
    alignContent,
    children,
    placement,
    showTooltip,
    trigger,
    container,
  } = props;

  return showTooltip ? (
    <OverlayTrigger
      placement={placement}
      trigger={trigger}
      container={container}
      overlay={
        <Tooltip
          id="tooltip"
          className={tooltipClass}
          data-testid="tooltip-content"
          style={{ position: 'fixed' }}
        >
          <div className={`tooltip-content  text-align-${alignContent}`}>{tooltipContent}</div>
        </Tooltip>
      }
    >
      {({ ref, ...triggerHandler }) => (
        <span ref={ref} {...triggerHandler}>
          {children}
        </span>
      )}
    </OverlayTrigger>
  ) : (
    <span>{children}</span>
  );
};

export default TooltipComponent;

TooltipComponent.defaultProps = {
  tooltipClass: 'tooltip-darkoverlay',
  placement: 'top',
  showTooltip: true,
  trigger: ['hover', 'focus'],
  alignContent: 'center',
  container: null,
};
