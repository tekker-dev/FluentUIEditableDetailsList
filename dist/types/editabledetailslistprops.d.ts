import { ConstrainMode, IButtonStyles, ICommandBarItemProps, ICommandBarStyleProps, ICommandBarStyles, IDetailsListProps, IScrollablePaneStyleProps, IScrollablePaneStyles, IStyleFunctionOrObject } from "@fluentui/react";
import { IColumnConfig } from "./columnconfigtype";
import { IGridCopy } from "./gridcopytype";
import { IRowAddWithValues } from "./rowaddtype";
export type IContentScrollablePaneStyleProps = Partial<IScrollablePaneStyleProps> & {
    scrollablePaneOffsetHeight?: number;
    scrollablePaneContentOffsetHeight?: number;
};
export type IEnableMessageBarErrors = {
    enableShowErrors: boolean;
    enableSendGroupedErrorsToCallback?: boolean;
};
export interface Props extends IDetailsListProps {
    actionsColumnMinWidth?: number;
    disableAllRowActions: boolean;
    id: number;
    gridLocation: string;
    zeroRowsMsg?: string;
    GridSaveAction?: any;
    actionIconStylesInGrid?: IButtonStyles;
    items: any[];
    columns: IColumnConfig[];
    commandBarStyles?: IStyleFunctionOrObject<ICommandBarStyleProps, ICommandBarStyles>;
    enableCSVExport?: boolean;
    enableExcelExport?: boolean;
    enableExcelImport?: boolean;
    exportFileName?: string;
    enableSaveChangesOnlyOnSubmit?: boolean;
    enableRowEditDelete?: boolean;
    enableRowEdit?: boolean;
    enableRowEditCancel?: boolean;
    enableColumnEdit?: boolean;
    enableBulkEdit?: boolean;
    enableSingleCellEditOnDoubleClick?: boolean;
    onGridSelectionChange?: any;
    onGridUpdate?: any;
    onGridSave?: any;
    enableSaveGridOnCellValueChange?: boolean;
    enableGridRowsDelete?: boolean;
    enableGridRowsAdd?: boolean;
    enableGridRowAddWithValues?: IRowAddWithValues;
    enableEditMode?: boolean;
    enableEditModeCancel?: boolean;
    enablePagination?: boolean;
    pageSize?: number;
    onExcelExport?: any;
    onExcelImport?: any;
    height?: string | number;
    scrollablePaneStyles?: IStyleFunctionOrObject<IContentScrollablePaneStyleProps, IScrollablePaneStyles>;
    width?: string | number;
    position?: string;
    constrainMode?: ConstrainMode;
    enableUnsavedEditIndicator?: boolean;
    enableGridReset?: boolean;
    enableColumnFilterRules?: boolean;
    enableColumnFilters?: boolean;
    enableCommandBar?: boolean;
    onGridStatusMessageCallback?: any;
    enableMessageBarErrors?: IEnableMessageBarErrors;
    onGridInErrorCallback?: any;
    gridCopyOptions?: IGridCopy;
    enableDefaultEditMode?: boolean;
    customCommandBarItems?: ICommandBarItemProps[];
    customCommandBarOverflowItems?: ICommandBarItemProps[];
}
