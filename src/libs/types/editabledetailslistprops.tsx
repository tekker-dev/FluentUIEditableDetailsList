import {
  ConstrainMode,
  IButtonStyles,
  IColumn,
  ICommandBarItemProps,
  ICommandBarStyleProps,
  ICommandBarStyles,
  IDetailsListProps,
  IScrollablePaneStyleProps,
  IScrollablePaneStyles,
  IStyleFunctionOrObject,
} from "@fluentui/react";
import { IColumnConfig } from "./columnconfigtype";
import { IGridCopy } from "./gridcopytype";
import { IRowAddWithValues } from "./rowaddtype";

export type IContentScrollablePaneStyleProps =
  Partial<IScrollablePaneStyleProps> & {
    scrollablePaneOffsetHeight?: number;
    scrollablePaneContentOffsetHeight?: number;
  };
export interface Props extends IDetailsListProps {
  id: number;
  actionIconStylesInGrid?: IButtonStyles;
  items: any[];
  columns: IColumnConfig[];
  commandBarStyles?: IStyleFunctionOrObject<
    ICommandBarStyleProps,
    ICommandBarStyles
  >;
  enableCSVExport?: boolean;
  enableExcelExport?: boolean;
  exportFileName?: string;
  enableSaveChangesOnlyOnSubmit?: boolean;
  enableRowEditCopy?: boolean;
  enableRowEditDelete?: boolean;
  enableRowEdit?: boolean;
  enableRowEditCancel?: boolean;
  enableColumnEdit?: boolean;
  enableBulkEdit?: boolean;
  enableSingleCellEditOnDoubleClick?: boolean;
  onGridSelectionChange?: any;
  onGridUpdate?: any;
  onGridSave?: any;
  enableGridRowsDelete?: boolean;
  enableGridRowsAdd?: boolean;
  enableRowAddWithValues?: IRowAddWithValues;
  enableEditMode?: boolean;
  enableEditModeCancel?: boolean;
  enablePagination?: boolean;
  pageSize?: number;
  onExcelExport?: any;
  height?: string | number;
  scrollablePaneStyles?: IStyleFunctionOrObject<
    IContentScrollablePaneStyleProps,
    IScrollablePaneStyles
  >;
  width?: string | number;
  position?: string;
  constrainMode?: ConstrainMode;
  enableUnsavedEditIndicator?: boolean;
  enableGridReset?: boolean;
  enableColumnFilterRules?: boolean;
  enableColumnFilters?: boolean;
  enableCommandBar?: boolean;
  enableSingleClickCellEdit?: boolean;
  onGridStatusMessageCallback?: any;
  gridCopyOptions?: IGridCopy;
  enableDefaultEditMode?: boolean;
  customCommandBarItems?: ICommandBarItemProps[];
  customCommandBarOverflowItems?: ICommandBarItemProps[];
}
