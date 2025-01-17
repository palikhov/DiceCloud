import DefaultTreeNode from '/imports/ui/properties/treeNodeViews/DefaultTreeNode.vue';
import AdjustmentTreeNode from '/imports/ui/properties/treeNodeViews/AdjustmentTreeNode.vue';
import BranchTreeNode from '/imports/ui/properties/treeNodeViews/BranchTreeNode.vue';
import ItemTreeNode from '/imports/ui/properties/treeNodeViews/ItemTreeNode.vue';
import DamageTreeNode from '/imports/ui/properties/treeNodeViews/DamageTreeNode.vue';
import EffectTreeNode from '/imports/ui/properties/treeNodeViews/EffectTreeNode.vue';
import ClassLevelTreeNode from '/imports/ui/properties/treeNodeViews/ClassLevelTreeNode.vue';
import ProficiencyTreeNode from '/imports/ui/properties/treeNodeViews/ProficiencyTreeNode.vue';
import ReferenceTreeNode from '/imports/ui/properties/treeNodeViews/ReferenceTreeNode.vue';
import SavingThrowTreeNode from '/imports/ui/properties/treeNodeViews/SavingThrowTreeNode.vue';

export default {
  default: DefaultTreeNode,
  adjustment: AdjustmentTreeNode,
  branch: BranchTreeNode,
  classLevel: ClassLevelTreeNode,
  damage: DamageTreeNode,
  effect: EffectTreeNode,
  item: ItemTreeNode,
  proficiency: ProficiencyTreeNode,
  reference: ReferenceTreeNode,
  savingThrow: SavingThrowTreeNode,
}
