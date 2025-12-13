import React, { useState } from 'react';

// TypeScript interfaces
interface Attribute {
  key: string;
  label: string;
  dataType: 'text' | 'number' | 'boolean' | 'enum' | 'date';
  required: boolean;
  unitGroup: string;
  enumOptions: string[];
}

interface Variant {
  key: string;
  label: string;
  options: string[];
}

interface FormData {
  typeName: string;
  typeCode: string;
  version: string;
  attributes: Attribute[];
  variants: Variant[];
}

interface ChipInputProps {
  chips: string[];
  onAdd: (value: string) => void;
  onRemove: (index: number) => void;
  placeholder: string;
}

interface Step {
  number: number;
  title: string;
}

export default function ProductTypeWizard() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    typeName: '',
    typeCode: '',
    version: '1',
    attributes: [],
    variants: []
  });

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '.')
      .replace(/^\.+|\.+$/g, '');
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      typeName: name,
      typeCode: generateSlug(name)
    });
  };

  const addAttribute = () => {
    setFormData({
      ...formData,
      attributes: [
        ...formData.attributes,
        {
          key: '',
          label: '',
          dataType: 'text',
          required: false,
          unitGroup: '',
          enumOptions: []
        }
      ]
    });
  };

const updateAttribute = (
  index: number, 
  field: keyof Attribute, 
  value: string | boolean | 'text' | 'number' | 'boolean' | 'enum' | 'date' | string[]
) => {
  const newAttributes = [...formData.attributes];
  (newAttributes[index] as any)[field] = value;
  setFormData({ ...formData, attributes: newAttributes });
};

  const removeAttribute = (index: number) => {
    const newAttributes = formData.attributes.filter((_, i) => i !== index);
    setFormData({ ...formData, attributes: newAttributes });
  };

  const addVariant = () => {
    setFormData({
      ...formData,
      variants: [
        ...formData.variants,
        { key: '', label: '', options: [] }
      ]
    });
  };

 const updateVariant = (index: number, field: keyof Omit<Variant, 'options'>, value: string) => {
  const newVariants = [...formData.variants];
  (newVariants[index] as any)[field] = value;
  setFormData({ ...formData, variants: newVariants });
};

  const removeVariant = (index: number) => {
    const newVariants = formData.variants.filter((_, i) => i !== index);
    setFormData({ ...formData, variants: newVariants });
  };

  const addChip = (index: number, value: string) => {
    if (!value.trim()) return;
    const newVariants = [...formData.variants];
    if (!newVariants[index].options.includes(value.trim())) {
      newVariants[index].options.push(value.trim());
      setFormData({ ...formData, variants: newVariants });
    }
  };

  const removeChip = (variantIndex: number, chipIndex: number) => {
    const newVariants = [...formData.variants];
    newVariants[variantIndex].options.splice(chipIndex, 1);
    setFormData({ ...formData, variants: newVariants });
  };

  const addEnumOption = (attrIndex: number, value: string) => {
    if (!value.trim()) return;
    const newAttributes = [...formData.attributes];
    if (!newAttributes[attrIndex].enumOptions.includes(value.trim())) {
      newAttributes[attrIndex].enumOptions.push(value.trim());
      setFormData({ ...formData, attributes: newAttributes });
    }
  };

  const removeEnumOption = (attrIndex: number, optIndex: number) => {
    const newAttributes = [...formData.attributes];
    newAttributes[attrIndex].enumOptions.splice(optIndex, 1);
    setFormData({ ...formData, attributes: newAttributes });
  };

  const ChipInput: React.FC<ChipInputProps> = ({ chips, onAdd, onRemove, placeholder }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault();
        onAdd(inputValue);
        setInputValue('');
      }
    };

    return (
      <div className="chip-input">
        {chips.map((chip, idx) => (
          <span key={idx} className="chip">
            {chip}
            <button
              onClick={() => onRemove(idx)}
              className="remove-chip"
            >
              <i className="fas fa-times"/>
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={chips.length === 0 ? placeholder : ''}
          className="chip-input-field"
        />
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="step-1">
      <div className="field-group">
        <label>Type Name *</label>
        <input
          type="text"
          value={formData.typeName}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="e.g., T-Shirt"
        />
      </div>

      <div className="field-group">
        <label>Type Code *</label>
        <input
          type="text"
          value={formData.typeCode}
          onChange={(e) => setFormData({ ...formData, typeCode: e.target.value })}
          placeholder="clothing.tshirt"
          className="code-input"
        />
        <p className="helper-text">Auto-suggested based on name</p>
      </div>

      <div className="field-group">
        <label>Version</label>
        <input
          type="number"
          value={formData.version}
          onChange={(e) => setFormData({ ...formData, version: e.target.value })}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-2">
      <div className="header-section">
        <h3>Product Attributes</h3>
        <button className="btn btn-primary" onClick={addAttribute}>
          <i className="fas fa-plus"/>
          Add Attribute
        </button>
      </div>

      {formData.attributes.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-info-circle icon"/>
          <p>No attributes yet. Click "Add Attribute" to get started.</p>
        </div>
      ) : (
        <div className="attributes-table">
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Label</th>
                <th>Data Type</th>
                <th>Required</th>
                <th>Unit Group</th>
                <th>Enum Options</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {formData.attributes.map((attr, idx) => (
                <tr key={idx}>
                  <td>
                    <input
                      type="text"
                      value={attr.key}
                      onChange={(e) => updateAttribute(idx, 'key', e.target.value)}
                      placeholder="color"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={attr.label}
                      onChange={(e) => updateAttribute(idx, 'label', e.target.value)}
                      placeholder="Color"
                    />
                  </td>
                  <td>
                    <select
                      value={attr.dataType}
                      onChange={(e) => updateAttribute(idx, 'dataType', e.target.value)}
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="boolean">Boolean</option>
                      <option value="enum">Enum</option>
                      <option value="date">Date</option>
                    </select>
                  </td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={attr.required}
                      onChange={(e) => updateAttribute(idx, 'required', e.target.checked)}
                    />
                  </td>
                  <td>
                    <select
                      value={attr.unitGroup}
                      onChange={(e) => updateAttribute(idx, 'unitGroup', e.target.value)}
                    >
                      <option value="">None</option>
                      <option value="weight">Weight</option>
                      <option value="length">Length</option>
                      <option value="volume">Volume</option>
                      <option value="temperature">Temperature</option>
                    </select>
                  </td>
                  <td>
                    {attr.dataType === 'enum' ? (
                      <ChipInput
                        chips={attr.enumOptions}
                        onAdd={(value) => addEnumOption(idx, value)}
                        onRemove={(chipIdx) => removeEnumOption(idx, chipIdx)}
                        placeholder="Type and press Enter"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">N/A</span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => removeAttribute(idx)}
                      className="remove-btn btn-icon"
                    >
                      <i className="fas fa-times"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="step-3">
      <div className="header-section">
        <h3>Variant Dimensions</h3>
        <button className="btn btn-primary" onClick={addVariant}>
          <i className="fas fa-plus"/>
          Add Variant Dimension
        </button>
      </div>

      {formData.variants.length === 0 ? (
        <div className="empty-state">
          <i className="fas fa-info-circle icon"/>
          <p>No variant dimensions yet. Click "Add Variant Dimension" to get started.</p>
        </div>
      ) : (
        <div className="variants-list">
          {formData.variants.map((variant, idx) => (
            <div key={idx} className="variant-card">
              <div className="card-content">
                <div className="form-grid">
                  <div className="field">
                    <label>Key *</label>
                    <input
                      type="text"
                      value={variant.key}
                      onChange={(e) => updateVariant(idx, 'key', e.target.value)}
                      placeholder="size"
                      className="mono"
                    />
                  </div>
                  <div className="field">
                    <label>Label *</label>
                    <input
                      type="text"
                      value={variant.label}
                      onChange={(e) => updateVariant(idx, 'label', e.target.value)}
                      placeholder="Size"
                    />
                  </div>
                  <div className="field full-width">
                    <label>Options *</label>
                    <ChipInput
                      chips={variant.options}
                      onAdd={(value) => addChip(idx, value)}
                      onRemove={(chipIdx) => removeChip(idx, chipIdx)}
                      placeholder="Type option and press Enter (e.g., S, M, L, XL)"
                    />
                    <p className="helper-text">Press Enter after each option</p>
                  </div>
                </div>
                <button
                  onClick={() => removeVariant(idx)}
                  className="remove-btn btn-icon"
                >
                  <i className="fas fa-times"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderStep4 = () => (
    <div className="step-4">
      <div className="success-banner">
        <div className="banner-content">
          <div className="icon-container">
            <i className="fas fa-check icon"/>
          </div>
          <h3>Review Your Product Type</h3>
        </div>
      </div>

      <div className="review-section">
        <div className="section-card">
          <h4>Basic Information</h4>
          <div className="info-grid">
            <div className="info-item">
              <span>Type Name:</span>
              <p>{formData.typeName || 'Not set'}</p>
            </div>
            <div className="info-item">
              <span>Type Code:</span>
              <p className="mono">{formData.typeCode || 'Not set'}</p>
            </div>
            <div className="info-item">
              <span>Version:</span>
              <p>{formData.version}</p>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h4>Attributes ({formData.attributes.length})</h4>
          {formData.attributes.length === 0 ? (
            <p className="empty-message">No attributes defined</p>
          ) : (
            <div className="items-list">
              {formData.attributes.map((attr, idx) => (
                <div key={idx} className="item-card">
                  <div className="item-header">
                    <span className="item-name">{attr.label || attr.key}</span>
                    {attr.required && (
                      <span className="required-badge">Required</span>
                    )}
                  </div>
                  <p className="item-key">{attr.key}</p>
                  <div className="item-meta">
                    <span className="meta-item">Type: {attr.dataType}</span>
                    {attr.unitGroup && (
                      <span className="meta-item">• Unit: {attr.unitGroup}</span>
                    )}
                    {attr.dataType === 'enum' && attr.enumOptions.length > 0 && (
                      <span className="meta-item">• Options: {attr.enumOptions.join(', ')}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="section-card">
          <h4>Variant Dimensions ({formData.variants.length})</h4>
          {formData.variants.length === 0 ? (
            <p className="empty-message">No variant dimensions defined</p>
          ) : (
            <div className="items-list">
              {formData.variants.map((variant, idx) => (
                <div key={idx} className="item-card">
                  <div className="item-header">
                    <span className="item-name">{variant.label || variant.key}</span>
                  </div>
                  <p className="item-key">{variant.key}</p>
                  <div className="options-list">
                    {variant.options.map((option, optIdx) => (
                      <span key={optIdx} className="option-chip">
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const steps: Step[] = [
    { number: 1, title: 'Basic Info' },
    { number: 2, title: 'Attributes' },
    { number: 3, title: 'Variants' },
    { number: 4, title: 'Review' }
  ];

  return (
    <div className="product-type-wizard">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>Create Product Type</h1>
          <p>Define your product structure with attributes and variants</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className="steps-container">
            {steps.map((s, idx) => (
              <React.Fragment key={s.number}>
                <div className="step">
                  <div
                    className={`step-number ${
                      step > s.number
                        ? 'completed'
                        : step === s.number
                        ? 'current'
                        : 'upcoming'
                    }`}
                  >
                    {step > s.number ? <i className="fas fa-check"/> : s.number}
                  </div>
                  <span
                    className={`step-title ${
                      step >= s.number ? 'active' : 'inactive'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`step-connector ${
                      step > s.number ? 'completed' : 'upcoming'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="form-content">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="btn btn-previous"
          >
            <i className="fas fa-chevron-left"/>
            Previous
          </button>
          {step < 4 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="btn btn-next"
            >
              {step === 1 && 'Next: Attributes'}
              {step === 2 && 'Next: Variants'}
              {step === 3 && 'Review & Save'}
              <i className="fas fa-chevron-right"/>
            </button>
          ) : (
            <button
              onClick={() => alert('Product type saved!')}
              className="btn btn-save"
            >
              <i className="fas fa-check"/>
              Save Product Type
            </button>
          )}
        </div>
      </div>
    </div>
  );
}