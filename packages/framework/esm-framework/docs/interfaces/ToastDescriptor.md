[@openmrs/esm-framework](../API.md) / ToastDescriptor

# Interface: ToastDescriptor

## Hierarchy

- **`ToastDescriptor`**

  ↳ [`ToastNotificationMeta`](ToastNotificationMeta.md)

## Table of contents

### UI Properties

- [actionButtonLabel](ToastDescriptor.md#actionbuttonlabel)
- [critical](ToastDescriptor.md#critical)
- [description](ToastDescriptor.md#description)
- [kind](ToastDescriptor.md#kind)
- [millis](ToastDescriptor.md#millis)
- [title](ToastDescriptor.md#title)

### UI Methods

- [onActionButtonClick](ToastDescriptor.md#onactionbuttonclick)

## UI Properties

### actionButtonLabel

• `Optional` **actionButtonLabel**: `string`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:17](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L17)

___

### critical

• `Optional` **critical**: `boolean`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:19](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L19)

___

### description

• **description**: `ReactNode`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:15](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L15)

___

### kind

• `Optional` **kind**: [`ToastType`](../API.md#toasttype)

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:18](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L18)

___

### millis

• `Optional` **millis**: `number`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:21](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L21)

___

### title

• `Optional` **title**: `string`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:20](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L20)

## UI Methods

### onActionButtonClick

▸ `Optional` **onActionButtonClick**(): `void`

#### Returns

`void`

#### Defined in

[packages/framework/esm-styleguide/src/toasts/toast.component.tsx:16](https://github.com/openmrs/openmrs-esm-core/blob/main/packages/framework/esm-styleguide/src/toasts/toast.component.tsx#L16)
